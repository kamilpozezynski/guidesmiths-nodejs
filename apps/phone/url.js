import routerx from "express-promise-router";
import phoneController from "./controller";
const router = routerx();

router.get("/phones", phoneController.getphones);

export default router;
