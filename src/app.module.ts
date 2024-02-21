import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ProvidersModule } from './providers/providers.module';
import { UsersModule } from './users/users.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { PostsModule } from './posts/posts.module';

@Module({
  imports: [ConfigModule.forRoot({
      isGlobal: true,
      envFilePath:`${process.cwd()}/.env`
    }), 
    ProvidersModule,
    UsersModule,
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
      sortSchema: true,
      playground: true
    }),
    PostsModule
  ],
  providers: [],
})
export class AppModule { }
