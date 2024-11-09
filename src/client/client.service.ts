import { Injectable } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { Repository } from 'typeorm';
import { Client } from './entities/client.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ClientService {

  constructor (@InjectRepository(Client) private readonly userRepository:Repository<Client>) {

  }
  create(createClientDto: CreateClientDto):Promise<Client> {
     const client:Client =new Client();
     client.id =createClientDto.id;
     client.name =createClientDto.name;
     client.age =createClientDto.age;
     return this.userRepository.save(client);

  }

  findAll() {

    return this.userRepository.find();
  }

  findOne(id: number) {
    return   this.userRepository.findOneBy({id:id});
  }

  update(id: number, updateClientDto: UpdateClientDto) {
    const client:Client =new Client();
    client.id =updateClientDto.id;
    client.name =updateClientDto.name;
    client.age =updateClientDto.age;
    client.id=id;
    return this.userRepository.save(client);
    
  }

  remove(id: number) {
    return this.userRepository.delete(id);

  }
}
