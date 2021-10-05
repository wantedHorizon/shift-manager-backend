import { UserEntity } from './users.entity';
import { Controller, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import {
    Crud,
    CrudController,
    CrudRequest,
    Override,
    ParsedRequest,
} from '@nestjsx/crud';

@Crud({
    model: {
        type: UserEntity,
    },
})
@Controller('users')
export class UsersController implements CrudController<UserEntity> {

    constructor(public service: UsersService) {
        // super(service)
    }

    // @Get('login/:id')
    // async login(@Param('id') id: string) {

    //     console.log("id", id);
    //    return await  this.service.login(id)
    // }

}
