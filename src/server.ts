import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './commons/app.module';
import { JsonapiExceptionFilter } from './commons/exception/jsonapi-exception.filter';
import { ValidationPipe } from './commons/pipe/validation.pipe';

async function bootstrap() {
	const app = await NestFactory.create(ApplicationModule);
	app.useGlobalFilters(new JsonapiExceptionFilter());
	app.useGlobalPipes(new ValidationPipe());
	await app.listen(3000);
}
bootstrap();
