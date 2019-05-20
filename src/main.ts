// main.ts
console.log("inside main.ts");
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app/app.module";

// platform definiton happens here.

// identify platform
platformBrowserDynamic().bootstrapModule(AppModule)