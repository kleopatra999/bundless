import bundless from '../../src';
import {PackageBuilder} from "../../test-kit/project-driver";
const host = '127.0.0.1';
const port = 3000;


export function setupBundlessServer(project: PackageBuilder, cb: Function) {
    const bundlessServer = bundless({
        rootDir: project.getPath(),
        baseUrl: '/modules/',
        srcDir: 'dist'
    });
    bundlessServer.listen(port, host, err => {
        if(err) {
            throw err;
        } else {
            cb();
        }
    });
}
