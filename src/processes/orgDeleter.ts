import { processDeleteQueue } from '../lib/skimmerSupport';
import { auth } from '../lib/hubAuth';

(async () => {
    await auth();
    await processDeleteQueue();
    process.exit(0);
})();
