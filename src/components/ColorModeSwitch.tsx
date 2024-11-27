import { HStack, Text } from "@chakra-ui/react";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";



const ColorModeSwitch = () => {
    const [checked, setChecked] = useState(false)
  return (
    <HStack>
        <Switch checked={checked} onCheckedChange={(e) => setChecked(e.checked)} colorPalette='green'/>
        <Text>Dark Mode</Text>
    </HStack>
  )

}
export default ColorModeSwitch;
