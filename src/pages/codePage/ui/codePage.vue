<template>
    <section class="codePage">
        <VSidebar />
        <div class="content">
            <VSnippet :code="jsCodeDraw" title="Отрисовка блока в тетрисе">
                Для упрощения получения координат был создан класс <i>matrix</i> с генератором
                <i>iter</i>, в результате перебора координат матриц заменяем значением, указанным в
                параметре
                <i>callback</i>
            </VSnippet>
            <VSnippet
                :code="pythonCodeController"
                :language="Language.python"
                title="Запросы к хранимым процедурам"
            >
                Модель для вызова GET функции, параметр db использует контроллер, в котором есть
                функции вызова операций к базе данных. Все обернуто в <i>catch_response</i> для
                того, чтобы для каждой отдельной модели была возможность управлять ответом. <br />
                Декоратор log вызывает функцию <i>send_log</i> из класса <i>Model</i>, тем самым
                дает возможность переопределять логи для конкретных моделей
            </VSnippet>

            <VSnippet
                :code="vueCode"
                :language="Language.ts"
                title="Значение из LocalStorage как реактивное"
            >
                Создается <i>ref</i> переменная, с которой мы и будем работать, и для сохранения ее
                в <i>localStorage</i> создается <i>watch</i>
            </VSnippet>
        </div>
    </section>
</template>

<script setup lang="ts">
    import VSidebar from '@/widgets/VSidebar.vue'
    import { shallowRef } from 'vue'
    import { Language } from '@/shared/UI/Code/Code.ts'
    import VSnippet from '@/widgets/VSnippet.vue'

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
    }`)
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
    const jsCodeDraw = shallowRef(`function _draw(
              area: Matrix,
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
          _draw(area, pos, target, () => ({}))
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

    .content {
        overflow: auto;
        display: grid;
        grid-template-columns: 1fr;
        grid-row-gap: 10px;
        padding: var(--padding) 15px;
    }
</style>