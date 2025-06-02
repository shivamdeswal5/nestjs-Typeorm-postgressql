import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CompanyDto } from './dto/company.dto';


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

    @Post()
    createComapny2(@Body() companyData: CompanyDto){
        console.log("Company Data");
        console.log(companyData)  
        return this.companyService.createCompany2(companyData); 
    }

    @Post(':userId/:companyId')
    addUserToCompany( @Param('userId') userId: string, @Param('companyId') companyId: string){ 
        return this.companyService.addUserToCompany(+userId,+companyId); 
    }
}
