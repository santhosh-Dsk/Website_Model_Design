import ILovePDFApi from '@ilovepdf/ilovepdf-nodejs';
import compression from 'compression';
import { render } from 'react-dom';
const instance = new ILovePDFApi('project_public_7c814602b07e882071375527a9bbb7c4_KelYq5f1df315b2e0b1fef0840781832715e6', 'secret_key_d4e8e0a9785a9154bf6403831657838d_kIcQb6c8b9c0ead722cb84b70b91a748d0de6');
const task = instance.newTask('compress');

compression = () => {
    task.start()
    .then(() => {
        return task.addFile('./sample.pdf');
    })
    .then(() => {
        return task.process();
    })
    .then(() => {
        return task.download();
    })
    .then((data) => {
        fs.writeFileSync('./compressed.pdf', data);
    });
}
export default compression;