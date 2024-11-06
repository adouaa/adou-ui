import React from 'react';
import { withTranslation } from 'react-i18next';
import FileUpload from 'components/adou-file-upload';
import Form, { FormItem } from 'components/adou-form';
import Button from 'components/adou-button';

interface AppProps {
    
}

const App = (props: AppProps) => {
    return <div className="app-wrapper">
        <FileUpload></FileUpload>


        <Form commonSuffixContent={<Button size='sm' outlineColor='danger' externalClassName='ms-2' suffixIcon='fa-solid fa-trash'></Button>}>
            <FormItem name="cs" label="测试">
                <FormItem.Input></FormItem.Input>
            </FormItem>
        </Form>
    </div>;
}

export default withTranslation()(App);