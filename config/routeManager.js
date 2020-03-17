import routerx from 'express-promise-router';
import phoneRouter from '../apps/phone/url';

const router = routerx();

router.use('/phone', phoneRouter);

export default router;
