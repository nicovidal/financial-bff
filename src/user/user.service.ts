import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './entities/user.entity';
import { Model } from 'mongoose';

@Injectable()
export class UserService {



  constructor(

    @InjectModel(User.name) private readonly userModel: Model<User>

  ) { }


  async create(createUserDto: CreateUserDto) {

    try {

      const newUser = await this.userModel.create(createUserDto)

      return newUser;
    } catch (error) {

      console.log('Error al crear usuario')
      throw new BadRequestException(error)
    }
  }

  async findAll() {

    try {

      const users = await this.userModel.find();

      return users
    } catch (error) {

      console.log('error al obtener los usuarios')
      throw new BadRequestException(error)
    }


  }

  async findOne(id: number) {

    try {

      const user = await this.userModel.findOne({ _id: id })

      return user;
    } catch (error) {

      console.log('error al obtener el usuario')
      throw new BadRequestException(error)
    }


  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }




}
