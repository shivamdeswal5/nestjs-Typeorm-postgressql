import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CompanyDto } from './dto/company.dto';
import { CreateUserDto } from '../user/dto/create-user.dto';

@Controller('company')
export class CompanyController {
    constructor(
        private  companyService: CompanyService
    ){}

    @Get()
    getCompanyDetails(){
        return this.companyService.getCompanies();
    }

    @Post(':id')
    createComapny(@Body() companyData: CompanyDto,  @Param('id') id: string){
        console.log("Company Data");
        console.log(companyData)  
        return this.companyService.createCompany(companyData,+id); 
    }


   @Patch(':id')
    addUserToCompany( @Param('id') id: string,  @Body() userData: CreateUserDto ,){ 
        return this.companyService.addUserToCompany(+id,userData); 
    }

    @Delete(':id')
        remove(@Param('id') id: string) {
        return this.companyService.deleteCompany(+id)
    }

    @Patch(':id')
     update(@Param('id') id: string, @Body() updateCompany: CompanyDto) {
        return this.companyService.updateCompany(+id, updateCompany);
    }
    
}
