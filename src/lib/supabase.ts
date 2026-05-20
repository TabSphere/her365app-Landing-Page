import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://koltvqprdseonsabxgfh.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtvbHR2cXByZHNlb25zYWJ4Z2ZoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzkyMTI4MTEsImV4cCI6MjA5NDc4ODgxMX0.4SXmIP9etlWigddR6Ew1v8awKEF4XbmswTKz7fLWfr8'

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
