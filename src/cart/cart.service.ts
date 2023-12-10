import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cart } from 'src/models/cart.model';
import { Repository } from 'typeorm';
import { CreateCartDto, DeleteCartDto, ReadCartDto } from './dto/cart.dto';

@Injectable()
export class CartService {
  constructor(
    @InjectRepository(Cart)
    private readonly cartRepository: Repository<Cart>,
  ) {}

  async createCart(createCartDto: CreateCartDto): Promise<Cart> {
    const { user_id, listing_id } = createCartDto;
    const cart = this.cartRepository.create({ user_id, listing_id });
    return await this.cartRepository.save(cart);
  }

  async deleteCart(deleteCartDto: DeleteCartDto): Promise<void> {
    const { cart_id } = deleteCartDto;
    const cart = await this.cartRepository.findOne({where:{cart_id:cart_id}});
    if (!cart) {
      throw new NotFoundException(`Cart with ID ${cart_id} not found`);
    }
    await this.cartRepository.remove(cart);
  }

  async getAllCarts(user_id: number): Promise<Cart[]> {
    return await this.cartRepository.find({ where: { user_id } });
  }
}