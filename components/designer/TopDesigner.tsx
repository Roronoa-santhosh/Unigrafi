import Link from "next/link";
//import Image from "next/image"; for designer avatar, but using img for now to avoid next/image errors in this component. Will refactor later.
const designers = [
  {
    name: "Alice Smith",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    designs: 45,
  },
  {
    name: "Bob Johnson",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    designs: 38,
  },{
    name: "Charlie Davis",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    designs: 32,
  },
  {
    name: "Diana Lee",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    designs: 28,
  }
];

function TopDesigner() {
  return (

      <div className="flex gap-6 mb-4 overflow-x-auto">
     
        {designers.map((designer) => (
         <Link
            key={designer.name}
            href="/designers" className="shrink-0">
             <div key={designer.name} className="flex p-3 m-1 bg-bg-surface border border-bg-border rounded-lg items-center gap-3 ">
                <img src={designer.avatar} alt={designer.name} className="w-10 h-10 rounded-full" />
                <div className="ml-3 flex flex-col">
                  <p className="font-semibold">{designer.name}</p>
                  <p className="text-sm text-muted-foreground">{designer.designs} Designs</p>
                </div>
        
            
          </div>
           </Link>
        ))}
       
    </div>
  )
}

export default TopDesigner
