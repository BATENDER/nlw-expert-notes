import logo from './assets/kait-github.png'
import { NewNoteCard } from './components/new-note-card'
import { NoteCard } from './components/note-card'

export function App() {
   return (
      <div className="mx-auto max-w-6xl my-12 space-y-6">
         <a href="https://github.com/BATENDER" className="flex items-center gap-2 text-sm outline-none rounded-md focus-visible:ring-2 focus-visible:ring-[#8257e5]">
               <img src={logo} alt="minha logo" className="w-10 rounded-3xl" />
               <span> BATENDER </span>
         </a>
         <form action="" className="w-full"> 
            <input 
               type="text" 
               placeholder="Busque suas notas..."
               className="w-full bg-transparent text-3xl font-semibold tracking-tight outline-none placeholder:text-slate-500"
            />
         </form>

         <div className="h-px bg-slate-700" />

         <div className="grid grid-cols-3 gap-6 auto-rows-[250px]">
            <NewNoteCard />

            <NoteCard note={
               {
                  date: new Date(),
                  content: "Hello world"
               }
            } />
         </div>
      </div>
   )
}
