<template>
    <section class="codePage">
        <VSidebar />
        <div class="content">
            <VCode :value="jsCodeDraw" v-if="false" />
            <VCode :value="pythonCodeController" v-if="false" />
            <VCode :value="vueCode" v-if="false" />
        </div>
    </section>
</template>

<script setup lang="ts">
    import VSidebar from '@/widgets/VSidebar.vue'
    import VCode from '@/shared/UI/Code/VCode.vue'
    import { shallowRef } from 'vue'

    const vueCode = shallowRef(`export function useLocalStorage(key: string, initialValue: any) {
    const storedValue = localStorage.getItem(key)
    const _value = ref(storedValue  !== undefined ? JSON.parse(storedValue) : initialValue)
    watch(
        _value.value,
        (newValue) => {
            localStorage.setItem(key, JSON.stringify(_value.value))
        },
        { immediate: true }
    )
    return _value
}
`)
    const pythonCodeController = shallowRef(`class FunctionModel(Model):
    def __len__(self):
        return self.length()

    @log
    def get(self, limit: int = 1) -> Union[dict, list]:
        """Получение n элементов"""
        with self._db as db:
            return self.catch_response(
                db.function(attrs=self.dict(), func_name=self.func_name, response_limit=limit))

    @log
    def length(self) -> int:
        """Получение количества строк"""
        with self._db as db:
            return db.function(attrs=self.dict(),
                               func_name=self.func_name, response_limit=1,
                               aggregate=count()).get('count', 0)`)
    const jsCodeDraw = shallowRef(`function _draw(area: Matrix,
        pos: Coordinate,
        target: Matrix,
        callback: (block: Block) => Block
    ): void {
        for (const { block, position } of matrix.iter(area)) {
            const newX = pos.x + position.x
            const newY = pos.y + position.y
            target[newY][newX] = callback(block)
        }
    }

function erase(area: Matrix, pos: Coordinate, target: Matrix): void {
    // Удаление матрицы - заполнение пустыми блоками
    _draw(area, pos, target, () => {
        return {}
    })
}

function draw(area: Matrix, pos: Coordinate, target: Matrix): void {
    // Отрисовка матрицы
    _draw(area, pos, target, (block) => block)
}`)
</script>

<style scoped lang="scss">
    .codePage {
        height: 100%;
        display: grid;
        grid-template-columns: auto 1fr;
    }
</style>