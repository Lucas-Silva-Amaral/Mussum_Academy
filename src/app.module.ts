import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';

@Module({
  imports: [ 
    GraphQLModule.forRoot<ApolloDriverConfig>({
    autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    sortSchema: true,
    driver: ApolloDriver,
  }),
],
})
export class AppModule {}
