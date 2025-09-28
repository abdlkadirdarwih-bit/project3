import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/project3/",
  plugins: [react()],
})




//git add . 
//git commit -m "change ui"  "first commit"
//git push -u origin git push -u origin gh-pages