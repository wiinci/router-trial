<template>
<div class="hello">
    <slat-list :slatContents="contents"></slat-list>
</div>
</template>

<script>
import SlatList from './SlatList'

export default {
    name: 'slat',

    components: {
        SlatList
    },

    data() {
        return {
            contents: [{
                    title: "MailChimp UX Issue 9 • Patterns",
                    created: "Jun 06, 2017",
                    listName: "MailChimp UX Newsletter",
                    status: "Sent",
                    stats: [{
                        number: 200,
                        label: "Subscribers",
                    }, {
                        number: 20,
                        label: "Opens",
                    }, {
                        number: 10,
                        label: "Clicks",
                    }],
                    buttonText: "View"
                },
                {
                    title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
                    created: "Jun 09, 2017",
                    listName: "MailChimp UX Newsletter",
                    // status: "Draft",
                    buttonText: "View"
                },
                {
                    title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
                    created: "Jun 06, 2017",
                    listName: "MailChimp UX Newsletter",
                    status: "Sent",
                    stats: [{
                        number: 200,
                        label: "Subscribers",
                    }, {
                        number: 20,
                        label: "Opens",
                    }, {
                        number: 10,
                        label: "Clicks",
                    }],
                    buttonText: "View"
                },
            ]
        }
    }
}
</script>
