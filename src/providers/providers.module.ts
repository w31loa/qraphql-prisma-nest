import { Module } from '@nestjs/common';
import { PrismaModule } from './Prisma/prisma.module';

@Module({
    imports:[PrismaModule]
})
export class ProvidersModule {}
