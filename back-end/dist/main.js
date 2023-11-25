"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
class APIDocument {
    static setup(app) {
        const options = new swagger_1.DocumentBuilder()
            .setTitle('MAD API')
            .setDescription('This Application exposes some APIs for academic purposes')
            .build();
        const document = swagger_1.SwaggerModule.createDocument(app, options, { ignoreGlobalPrefix: true });
        swagger_1.SwaggerModule.setup('docs', app, document);
    }
}
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    APIDocument.setup(app);
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map