import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://gthhitxybabljovaqezo.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd0aGhpdHh5YmFibGpvdmFxZXpvIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5MzkxOTUxMiwiZXhwIjoyMDA5NDk1NTEyfQ.VIVV1Sv8fv7Lr11ChC-vJ-FQJsWJuPgOrU5zf1Fp96o';

const supabase = createClient(supabaseUrl, supabaseKey);




export default supabase ;