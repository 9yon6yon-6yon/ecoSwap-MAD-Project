import { Body, Controller, Delete, Get, Param, Post, Query } from '@nestjs/common';
import { CartService } from './cart.service';
import { CreateCartDto, ReadCartDto, DeleteCartDto } from './dto/cart.dto';
import { ApiBadRequestResponse, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Cart } from 'src/models/cart.model';

@ApiTags('cart API')
@Controller('carts')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @ApiOperation({ summary: 'Create a new cart entry' })
  @ApiResponse({ status: 201, description: 'The cart entry has been successfully created', type: Cart })
  @ApiBadRequestResponse({ description: 'Invalid input data' })
  @Post()
  createCart(@Body() createCartDto: CreateCartDto): Promise<Cart> {
    return this.cartService.createCart(createCartDto);
  }

  @ApiOperation({ summary: 'Delete a cart entry by ID' })
  @ApiResponse({ status: 200, description: 'The cart entry has been successfully deleted' })
  @ApiResponse({ status: 404, description: 'Cart entry not found' })
  @Delete(':id')
  deleteCart(@Param('id') id: number): Promise<void> {
    const deleteCartDto: DeleteCartDto = { cart_id: id };
    return this.cartService.deleteCart(deleteCartDto);
  }


  @ApiOperation({ summary: 'Get all carts added by a specific user' })
  @ApiResponse({ status: 200, description: 'Return a list of cart entries added by the user', type: Cart, isArray: true })
  @Get('user/:userId')
  getAllCartsByUser(@Param('userId') userId: number): Promise<Cart[]> {
    return this.cartService.getAllCarts(userId);
  }
}
