import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateMessageDto {
  @IsNotEmpty()
  @IsString()
  public riderGroupId: string;
  
  @IsNotEmpty()
  @IsString()
  public senderId: string;
  
  @IsNotEmpty()
  @IsString()
  public message: string;

  @IsNotEmpty()
  @IsNumber()
  public status: number;
}
