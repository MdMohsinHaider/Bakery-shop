import React from 'react'
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarShortcut, MenubarTrigger, } from "@/components/ui/menubar"
import Thembuttontoogle from './Thembuttontoogle'


function Navmenubar() {
    return (
        <div className=' justify-evenly'>
            <div className="grid gap-4 m-2 sm:grid-cols-12 ">

                <div className="min-h-[30px] rounded sm:col-span-4">
                    <h1 className=' text-center p-2 md:p-6 text-3xl md:text-5xl'>Bakery Shop</h1>
                </div>
                
                <div className='min-h-[30px] rounded sm:col-span-6 hidden sm:block'></div>
                <div className='min-h-[30px] rounded sm:col-span-1'>
                    <div className='  p-2 mt-3 '>
                        <Menubar>
                            <MenubarMenu>
                                <MenubarTrigger>Browse</MenubarTrigger>
                                <MenubarContent>

                                    <MenubarItem>
                                        Bread<MenubarShortcut>⌘A</MenubarShortcut>
                                    </MenubarItem>

                                    <MenubarItem>
                                        Cupcakes<MenubarShortcut>⌘B</MenubarShortcut>
                                    </MenubarItem>

                                    <MenubarItem>
                                        Muffins<MenubarShortcut>⌘C</MenubarShortcut>
                                    </MenubarItem>

                                    <MenubarItem>
                                        Donuts<MenubarShortcut>⌘D</MenubarShortcut>
                                    </MenubarItem>

                                    <MenubarItem>
                                        Cakes<MenubarShortcut>⌘E</MenubarShortcut>
                                    </MenubarItem>

                                    <MenubarSeparator />
                                        <MenubarItem>Share</MenubarItem>
                                    <MenubarSeparator />

                                    <MenubarItem>Order List</MenubarItem>

                                </MenubarContent>
                            </MenubarMenu>
                        </Menubar>
                    </div>
                </div>

                <div className="min-h-[30px] rounded sm:col-span-1  ">                    
                    <div className='text-center sm:mt-5 mt-3'>
                        <Thembuttontoogle />
                    </div>
                </div>
            </div> 
            
        </div>
    )
}

export default Navmenubar