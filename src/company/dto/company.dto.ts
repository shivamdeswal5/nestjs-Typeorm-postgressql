import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MinLength
} from 'class-validator';


export class CompanyDto {
  @IsString()
  @MinLength(2, { message: 'Name must have atleast 2 characters.' })
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @MinLength(2, { message: 'Username must have atleast 2 characters.' })
  ceo: string;

  @IsNotEmpty()
  @IsEmail({}, { message: 'Please provide valid Email.' })
  email: string;

}