import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './commons/app.module';
import { JsonapiExceptionFilter } from './commons/exception/jsonapi-exception.filter';
import { ValidationPipe } from './commons/pipe/validation.pipe';
import { JsonapiTransformInterceptor } from './commons/transformer/jsonapi.transform.interceptor';
import { AppContainer } from './commons/app.container';

async function bootstrap() {
	const app = await NestFactory.create(ApplicationModule);
	AppContainer.initContainer(app);
	app.useGlobalFilters(new JsonapiExceptionFilter());
	app.useGlobalPipes(new ValidationPipe());
	app.useGlobalInterceptors(new JsonapiTransformInterceptor());
	await app.listen(3000);
}
bootstrap();
