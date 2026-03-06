import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class GameLanguageRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findMany() {
    return this.prisma.language.findMany();
  }

  async createMany(data, tx?: Prisma.TransactionClient) {
    const client = tx ?? this.prisma;
    return client.gameLanguageSupport.createMany({
      data,
      skipDuplicates: true,
    });
  }
}
