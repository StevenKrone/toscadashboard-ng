import {Attribute} from './attribute';
import {TestConfigurationParameter} from './testconfigurationparameter';

export class TestCaseObject {
    Attributes: Attribute[];
    TestConfigurationParameters: TestConfigurationParameter[];
    TypeName: string;
    UniqueId: string;
}