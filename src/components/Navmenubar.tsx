import React from 'react'
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarShortcut, MenubarTrigger, } from "@/components/ui/menubar"
import Thembuttontoogle from './Thembuttontoogle'


function Navmenubar() {
    return (
        <div className=' flex-grow-2 flex-wrap'>
            <div>
                <div className='flex flex-row-reverse text-center '>
                    <h1 className=' m-8 order-1 '>Bakery Shop</h1>
                    <div className=' m-8'>
                        <Thembuttontoogle />
                    </div>
                    <div className=' m-8'>
                        <Menubar>
                            <MenubarMenu>
                                <MenubarTrigger>Browse</MenubarTrigger>
                                <MenubarContent>
                                    <MenubarItem>
                                        New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                                    </MenubarItem>
                                    <MenubarItem>New Window</MenubarItem>
                                    <MenubarSeparator />
                                    <MenubarItem>Share</MenubarItem>
                                    <MenubarSeparator />
                                    <MenubarItem>Print</MenubarItem>
                                </MenubarContent>
                            </MenubarMenu>
                        </Menubar>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Navmenubar