@henil

To build all apps and packages with internal dependencies:
pnpm i
npx nx run-many --target=build

To run specific app (for example nestjs-http-gateway which contains oacontainer module for now)
npx nx run @tkssharma/gateway:start:dev 
