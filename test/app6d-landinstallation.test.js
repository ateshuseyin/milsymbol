import { ms } from "../src/ms";
import { app6d } from "../src/milstd";
import verify from "./app6d";
ms.setStandard("APP6");

import icons from "../src/numbersidc/sidc/landinstallation";
ms.addIcons(icons);

verify(ms, app6d, "APP-6 D Land Installation", "20");
