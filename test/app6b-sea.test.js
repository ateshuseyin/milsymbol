import { ms } from "../src/ms";
import { app6b } from "../src/milstd";
import verify from "./app6b";
ms.setStandard("APP6");

import icons from "../src/lettersidc/sidc/sea";
ms.addIcons(icons);

verify(ms, "APP-6 B Sea", app6b.WAR.SSUF);
