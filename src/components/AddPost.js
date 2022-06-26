import {Form, Button} from "react-bootstrap"
import {useState, useEffect} from "react";

const AddPost = (props) => {
    function simulateNetworkRequest() {
        return new Promise((resolve) => setTimeout(resolve, 2000));
    }

    function LoadingButton() {
        const [isLoading, setLoading] = useState(false);

        useEffect(() => {
            if (isLoading) {
                simulateNetworkRequest().then(() => {
                    setLoading(false);
                });
            }
        }, [isLoading]);

        const handleClick = () => setLoading(true);

        return (
            <Button
                variant="primary"
                disabled={isLoading}
                onClick={!isLoading ? handleClick : null}
            >
                {isLoading ? 'Loading…' : 'Загрузить изображение'}
            </Button>
        );
    }

    const [author, setAuthor] = useState("")
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [picture, setPicture] = useState("")

    const authorHandler = (event) => {
        setAuthor(event.target.value)
    }

    const titleHandler = (event) => {
        setTitle(event.target.value)
    }

    const contentHandler = (event) => {
        setContent(event.target.value)
    }

    const pictureHandler = (event) => {
        setPicture(event.target.value)
    }

    const onSubmit = (event, author, title, content) => {
        event.preventDefault()
        props.addPost(author, title, content)
        setAuthor("")
        setTitle("")
        setContent("")
    }

    return (
        <div>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicAuthor">
                    <Form.Label>Автор</Form.Label>
                    <Form.Control type="author" placeholder="Имя" onChange={authorHandler} value={author}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicTitle">
                    <Form.Label>Заголовок</Form.Label>
                    <Form.Control type="title" placeholder="Заголовок поста" onChange={titleHandler} value={title}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicContent">
                    <Form.Label>Содержание поста</Form.Label>
                    <Form.Control type="content" placeholder="О чём вы хотите рассказать?" onChange={contentHandler} value={content}/>
                </Form.Group>
                <Button style={{marginBottom: "10px"}} variant="primary" type="submit" onClick={(event) => onSubmit(event, author, title, content, picture)}>
                    Добавить
                </Button>
            </Form>
        </div>
    )
}

export default AddPost;
