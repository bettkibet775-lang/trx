import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://ffksawhxrytfzuzvlqjh.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZma3Nhd2h4cnl0Znp1enZscWpoIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1NTA4NzA1OSwiZXhwIjoyMDcwNjYzMDU5fQ.Tlu7IsqN8Q7idEpRZjWOqDEarVP7PePlhkfqYFZZIrY";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);