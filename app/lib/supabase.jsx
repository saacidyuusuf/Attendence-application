import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';

const supabase = createRouteHandlerClient();

export default supabase;