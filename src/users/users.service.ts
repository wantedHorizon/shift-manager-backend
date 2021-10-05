import { UserEntity } from './users.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';

@Injectable()
export class UsersService extends TypeOrmCrudService<UserEntity>{

    constructor(
        @InjectRepository(UserEntity)
        repo: Repository<UserEntity>,

    ) {
        super(repo);
    }
}
