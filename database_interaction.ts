import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
dotenv.config();

// Supabase configuration
const supabaseUrl = 'https://rvrdnygwnasypuaxsqth.supabase.co';
const supabaseKey = process.env.SUPABASE_KEY || "";

// Create a Supabase client
const supabase = createClient(supabaseUrl, supabaseKey);

// Define an asynchronous function to insert data into the "Songs" table
async function data_inter(
  name: string,
  image: string,
  subtitle: string,
  url?: string
): Promise<void> {
  // Insert data into the "Songs" table
  const { data, error } = await supabase
    .from('Songs')
    .insert([{ name, image, subtitle, url }])
    .select();

  // You might want to handle the response or error here
  if (error) {
    console.error('Error inserting data:', error);
  } else {
    console.log('Data inserted successfully:', data);
  }
}

async function data_search(search_query: string) {
  const { data, error } = await supabase
    .from('Songs')
    .select()
    .textSearch('name', `'${search_query}'`);
  if(error){ 
    console.log("error fetching data from the database")
     return [];
    
  }
  return data ;
}

// Export the function for use in other modules
export { data_inter, data_search };
