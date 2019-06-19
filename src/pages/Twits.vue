<template>
<v-list two-line style="background:#26c6da">
    <template
        v-for='twit in twits'
    >
    <v-list-tile :key='twit.title' avatar>
        <v-list-tile-avatar>
            <img :src='twit.avatar'>
        </v-list-tile-avatar>
        <v-list-tile-content>
            <v-list-tile-title>{{twit.message}}</v-list-tile-title>
        </v-list-tile-content>
        <v-list-tile-action>
            <v-btn
              icon
            >
            <v-icon>chat_bubble</v-icon>
            </v-btn>
        </v-list-tile-action>
         <v-list-tile-action>
            <v-btn
              icon
            >
            <v-icon>delete</v-icon>
            </v-btn>
        </v-list-tile-action>
    </v-list-tile>
    <v-divider :key='twit.title'/> 
    </template>
</v-list>
</template>

<script>
import Twit  from '@/components/Twit'
export default {
    name: 'twits',
    components: {
        Twit
    },
    data: () => ({
        twits: [
            {
                title: 'asdasdassf',
                avatar: 'https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light',
                message: 'https://avataaars.io/t'
            },
            {
                title: 'sdfbtrbf',
                avatar: 'https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light',
                message: 'fdevdvfdvdfbvee1'
            }
        ]
    })
}
</script>

<style>

</style>
