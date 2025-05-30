import {
    ArrayMinSize,
    IsArray,
    IsNotEmpty,
    IsString,
    MinLength,
} from 'class-validator';

export class PostDto {
    @IsString()
    @MinLength(4, { message: 'Title must have atleast 4 characters.' })
    @IsNotEmpty()
    title: string;

    @IsNotEmpty()
    @MinLength(10, { message: 'Body must be atleast 10 character' })
    body: string;

    @IsNotEmpty()
    image: string;

    @IsArray({ message: 'Tags must be an array.' })
    @ArrayMinSize(2, { message: 'At least 2 tags is required.' })
    tags: string[]
}