----
---- Created Date: [2024-11-28 22:06:20]
---- Author: Johnny
----
---- Made with passion 🎵
----
---- File: [client.lua]
----

RegisterCommand("openExempleMenu", function(source, args, rawCommand)
    SetNuiFocus(true, true)
    SendNUIMessage({
        element = "example",
        action = 'show'
    })
end)

RegisterNUICallback('closeExempleMenu', function(data, cb)
    SetNuiFocus(false, false)
end)