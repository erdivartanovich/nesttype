import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './commons/app.module';
import { ValidationPipe } from './commons/pipe/validation.pipe';
import { JsonApiExceptionTransformer } from './commons/transformer/jsonapi-exception.transformer';
import { JsonApiTransformer } from './commons/transformer/jsonapi.transformer';
import { AppContainer } from './commons/app.container';

async function bootstrap() {
	const app = await NestFactory.create(ApplicationModule);
	AppContainer.initContainer(app);
	app.useGlobalPipes(new ValidationPipe());
	app.useGlobalFilters(new JsonApiExceptionTransformer());
	app.useGlobalInterceptors(new JsonApiTransformer());
	await app.listen(3000);
}
bootstrap();
