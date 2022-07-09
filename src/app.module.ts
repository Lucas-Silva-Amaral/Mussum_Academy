import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { ConfigModule } from '@nestjs/config';
import { StudentsModule } from './modules/students/students.module';
import { DisciplinesModule } from './modules/disciplines/disciplines.module';
@Module({
  imports: [ 
    GraphQLModule.forRoot<ApolloDriverConfig>({
    autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    sortSchema: true,
    driver: ApolloDriver, 
  }),
  ConfigModule.forRoot(),
  TypeOrmModule.forRoot({
    type: 'postgres',
    host: process.env.TYPEORM_HOST,
    port: +process.env.TYPEORM_PORT || 5432,
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    database: process.env.TYPEORM_DATABASE,
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: process.env.TYPEORM_SYNCHRONIZE === 'true',
    logging: process.env.TYPEORM_LOGGING === 'true',
  }),
  StudentsModule,
  DisciplinesModule,
],
})
export class AppModule {}
