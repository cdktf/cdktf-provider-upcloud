# `dataUpcloudManagedObjectStoragePolicies` Submodule <a name="`dataUpcloudManagedObjectStoragePolicies` Submodule" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataUpcloudManagedObjectStoragePolicies <a name="DataUpcloudManagedObjectStoragePolicies" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies"></a>

Represents a {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.32.0/docs/data-sources/managed_object_storage_policies upcloud_managed_object_storage_policies}.

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/dataupcloudmanagedobjectstoragepolicies"

dataupcloudmanagedobjectstoragepolicies.NewDataUpcloudManagedObjectStoragePolicies(scope Construct, id *string, config DataUpcloudManagedObjectStoragePoliciesConfig) DataUpcloudManagedObjectStoragePolicies
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesConfig">DataUpcloudManagedObjectStoragePoliciesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesConfig">DataUpcloudManagedObjectStoragePoliciesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataUpcloudManagedObjectStoragePolicies resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/dataupcloudmanagedobjectstoragepolicies"

dataupcloudmanagedobjectstoragepolicies.DataUpcloudManagedObjectStoragePolicies_IsConstruct(x interface{}) *bool
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/dataupcloudmanagedobjectstoragepolicies"

dataupcloudmanagedobjectstoragepolicies.DataUpcloudManagedObjectStoragePolicies_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/dataupcloudmanagedobjectstoragepolicies"

dataupcloudmanagedobjectstoragepolicies.DataUpcloudManagedObjectStoragePolicies_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/dataupcloudmanagedobjectstoragepolicies"

dataupcloudmanagedobjectstoragepolicies.DataUpcloudManagedObjectStoragePolicies_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataUpcloudManagedObjectStoragePolicies resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataUpcloudManagedObjectStoragePolicies to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataUpcloudManagedObjectStoragePolicies that should be imported.

Refer to the {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.32.0/docs/data-sources/managed_object_storage_policies#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataUpcloudManagedObjectStoragePolicies to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.property.policies">Policies</a></code> | <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesList">DataUpcloudManagedObjectStoragePoliciesPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.property.serviceUuidInput">ServiceUuidInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.property.serviceUuid">ServiceUuid</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Policies`<sup>Required</sup> <a name="Policies" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.property.policies"></a>

```go
func Policies() DataUpcloudManagedObjectStoragePoliciesPoliciesList
```

- *Type:* <a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesList">DataUpcloudManagedObjectStoragePoliciesPoliciesList</a>

---

##### `ServiceUuidInput`<sup>Optional</sup> <a name="ServiceUuidInput" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.property.serviceUuidInput"></a>

```go
func ServiceUuidInput() *string
```

- *Type:* *string

---

##### `ServiceUuid`<sup>Required</sup> <a name="ServiceUuid" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.property.serviceUuid"></a>

```go
func ServiceUuid() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataUpcloudManagedObjectStoragePoliciesConfig <a name="DataUpcloudManagedObjectStoragePoliciesConfig" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/dataupcloudmanagedobjectstoragepolicies"

&dataupcloudmanagedobjectstoragepolicies.DataUpcloudManagedObjectStoragePoliciesConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ServiceUuid: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesConfig.property.serviceUuid">ServiceUuid</a></code> | <code>*string</code> | Service UUID. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ServiceUuid`<sup>Required</sup> <a name="ServiceUuid" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesConfig.property.serviceUuid"></a>

```go
ServiceUuid *string
```

- *Type:* *string

Service UUID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.32.0/docs/data-sources/managed_object_storage_policies#service_uuid DataUpcloudManagedObjectStoragePolicies#service_uuid}

---

### DataUpcloudManagedObjectStoragePoliciesPolicies <a name="DataUpcloudManagedObjectStoragePoliciesPolicies" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPolicies.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/dataupcloudmanagedobjectstoragepolicies"

&dataupcloudmanagedobjectstoragepolicies.DataUpcloudManagedObjectStoragePoliciesPolicies {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataUpcloudManagedObjectStoragePoliciesPoliciesList <a name="DataUpcloudManagedObjectStoragePoliciesPoliciesList" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/dataupcloudmanagedobjectstoragepolicies"

dataupcloudmanagedobjectstoragepolicies.NewDataUpcloudManagedObjectStoragePoliciesPoliciesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataUpcloudManagedObjectStoragePoliciesPoliciesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesList.get"></a>

```go
func Get(index *f64) DataUpcloudManagedObjectStoragePoliciesPoliciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataUpcloudManagedObjectStoragePoliciesPoliciesOutputReference <a name="DataUpcloudManagedObjectStoragePoliciesPoliciesOutputReference" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/dataupcloudmanagedobjectstoragepolicies"

dataupcloudmanagedobjectstoragepolicies.NewDataUpcloudManagedObjectStoragePoliciesPoliciesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataUpcloudManagedObjectStoragePoliciesPoliciesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesOutputReference.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesOutputReference.property.attachmentCount">AttachmentCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesOutputReference.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesOutputReference.property.defaultVersionId">DefaultVersionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesOutputReference.property.document">Document</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesOutputReference.property.serviceUuid">ServiceUuid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesOutputReference.property.systemAttribute">SystemAttribute</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesOutputReference.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPolicies">DataUpcloudManagedObjectStoragePoliciesPolicies</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesOutputReference.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `AttachmentCount`<sup>Required</sup> <a name="AttachmentCount" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesOutputReference.property.attachmentCount"></a>

```go
func AttachmentCount() *f64
```

- *Type:* *f64

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesOutputReference.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `DefaultVersionId`<sup>Required</sup> <a name="DefaultVersionId" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesOutputReference.property.defaultVersionId"></a>

```go
func DefaultVersionId() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Document`<sup>Required</sup> <a name="Document" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesOutputReference.property.document"></a>

```go
func Document() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ServiceUuid`<sup>Required</sup> <a name="ServiceUuid" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesOutputReference.property.serviceUuid"></a>

```go
func ServiceUuid() *string
```

- *Type:* *string

---

##### `SystemAttribute`<sup>Required</sup> <a name="SystemAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesOutputReference.property.systemAttribute"></a>

```go
func SystemAttribute() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesOutputReference.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataUpcloudManagedObjectStoragePoliciesPolicies
```

- *Type:* <a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPolicies">DataUpcloudManagedObjectStoragePoliciesPolicies</a>

---



