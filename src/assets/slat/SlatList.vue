<template>
<ul class="c-slatList">
    <li v-for="(content, index) in slatContents" class="c-slatItem">
        <div class="c-slat">
            <div class="c-slatCheckbox">
                <input type="checkbox" :name="'campaign' + index" :value="'campaign' + index">
            </div>
            <div class="c-slatTitle">
                <h4 class="u-h4"><a href="#0">{{content.title}}</a></h4>
                <p class="u-small">Created on {{content.created}}</p>
                <p class="u-small">{{content.listName}}</p>
            </div>
            <div class="c-slatStatus u-text-align--center">
                <span :title="'Status of this ' + content.type" :class="setBadgeClass(content.status)">{{content.status}}</span>
            </div>
            <div class="c-slatStats u-display--flex u-justify-content--center">
                <div v-for="(stat, index) in content.stats" class="c-slatStat">
                    <p class="u-font-weight--bold">{{stat.number}}</p>
                    <p>{{stat.label}}</p>
                </div>
            </div>
            <div class="c-slatButton u-text-align--right">
                <button class="c-button c-button--p1" type="button">{{content.buttonText}}</button>
            </div>
        </div>
    </li>
</ul>
</template>

<script>
export default {
    name: 'slat-list',

    props: {
        slatContents: {
            type: Array,
            required: true
        }
    },

    methods: {
        setBadgeClass: function(status) {
            return {
                'c-badge': true,
                'c-badge--success': status === 'Sent',
                'c-badge--error': status === 'Paused',
                'c-badge--base': status === 'Draft'
            }
        }
    }
}
</script>

<style lang="less">
@border-color: #ddd;
@base-unit: 6px;
ul {
    list-style-type: none;
}
li,
p,
ul {
    padding: 0;
    margin: 0;
}
.u-display--grid {
    display: grid;
}
.u-display--flex {
    display: flex;
}
.u-font-weight--bold {
    font-weight: 500;
}
.u-text-align--right {
    text-align: right;
}
.u-text-align--center {
    text-align: center;
}
.u-justify-content--center {
    justify-content: center;
}
.u-h4 {
    font-size: 15px;
    font-weight: 500;
    margin: 0 0 (@base-unit * 2) 0;
}
.u-small {
    font-size: 13px;
}
.c-slat {
    display: grid;
}
.c-slatList {
    border-top: 1px solid @border-color;
    border-bottom: 1px solid @border-color;
}
.c-slatItem {
    + .c-slatItem {
        border-top: 1px solid @border-color;
    }
}
.c-slatStat {
    + .c-slatStat {
        margin-left: (@base-unit * 4);
    }
}
.c-badge {
    font-size: 13px;
    font-weight: 500;
    border-radius: 6px;
    padding: 3px 9px;

    &--success {
        color: darkgreen;
        background-color: greenyellow;
    }

    &--error {
        color: darkred;
        background-color: lightpink;
    }

    &--base {
        color: gray;
        background-color: ghostwhite;
    }
}
</style>

<style lang="less" scoped>
@base-unit: 6px;
p + p {
    margin-top: (@base-unit / 2);
}
.u-h4 {
    margin-bottom: (@base-unit / 2);
}
.c-slat {
    grid-template-columns: 30px 1fr 0.2fr 1fr auto;
}
.c-slatItem {
    padding: (@base-unit * 2) 0;
}
</style>
