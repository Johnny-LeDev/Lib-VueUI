----
---- Created Date: [2024-11-28 22:06:20]
---- Author: Johnny
----
---- Made with passion 🎵
----
---- File: [client.lua]
----

local Menu = "example";

RegisterCommand("openExempleMenu", function(source, args, rawCommand)
    SetNuiFocus(true, true)
    SendNUIMessage({
        element = Menu,
        action = 'showFrame'
    })
end)

RegisterNUICallback(Menu..'/closeMenu', function(data, cb)
    SetNuiFocus(false, false)
end)