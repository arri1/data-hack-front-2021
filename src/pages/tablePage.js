import styled from 'styled-components'
import {Table, Tag} from 'antd'

const Container = styled.div`
  display: flex;
  flex: 1;

`

const TagsContainer = styled.div`
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
`

const dataSource = [
    {
        id: 1,
        age: 18,
        tags: ['С велосипдом', 'С коляской']
    },
    {
        id: 2,
        age: 19,
        tags: ['С маской', 'С коляской']
    }
]

const TablePage = () => {
    return (
        <Container>
            <Table
                style={{width: '100%'}}
                dataSource={dataSource}
                rowKey={'id'}
            >
                <Table.Column
                    title={'Идентификатор'}
                    dataIndex={'id'}
                />
                <Table.Column
                    title={'Возраст'}
                    dataIndex={'age'}
                />
                <Table.Column
                    title={'Приметы'}
                    dataIndex={'tags'}
                    render={(tags) => {
                        return (
                            <TagsContainer>
                                {
                                    tags.map((item) => {
                                        return (
                                            <Tag key={item} color={'red'}>{item}</Tag>
                                        )
                                    })
                                }
                            </TagsContainer>
                        )
                    }}
                />
            </Table>
        </Container>
    )

}
export default TablePage
