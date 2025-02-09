# `dataUpcloudManagedDatabaseValkeySessions` Submodule <a name="`dataUpcloudManagedDatabaseValkeySessions` Submodule" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataUpcloudManagedDatabaseValkeySessions <a name="DataUpcloudManagedDatabaseValkeySessions" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions"></a>

Represents a {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.18.0/docs/data-sources/managed_database_valkey_sessions upcloud_managed_database_valkey_sessions}.

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/dataupcloudmanageddatabasevalkeysessions"

dataupcloudmanageddatabasevalkeysessions.NewDataUpcloudManagedDatabaseValkeySessions(scope Construct, id *string, config DataUpcloudManagedDatabaseValkeySessionsConfig) DataUpcloudManagedDatabaseValkeySessions
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsConfig">DataUpcloudManagedDatabaseValkeySessionsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsConfig">DataUpcloudManagedDatabaseValkeySessionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.putSessions">PutSessions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.resetLimit">ResetLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.resetOffset">ResetOffset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.resetOrder">ResetOrder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.resetSessions">ResetSessions</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutSessions` <a name="PutSessions" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.putSessions"></a>

```go
func PutSessions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.putSessions.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.resetId"></a>

```go
func ResetId()
```

##### `ResetLimit` <a name="ResetLimit" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.resetLimit"></a>

```go
func ResetLimit()
```

##### `ResetOffset` <a name="ResetOffset" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.resetOffset"></a>

```go
func ResetOffset()
```

##### `ResetOrder` <a name="ResetOrder" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.resetOrder"></a>

```go
func ResetOrder()
```

##### `ResetSessions` <a name="ResetSessions" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.resetSessions"></a>

```go
func ResetSessions()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataUpcloudManagedDatabaseValkeySessions resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/dataupcloudmanageddatabasevalkeysessions"

dataupcloudmanageddatabasevalkeysessions.DataUpcloudManagedDatabaseValkeySessions_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/dataupcloudmanageddatabasevalkeysessions"

dataupcloudmanageddatabasevalkeysessions.DataUpcloudManagedDatabaseValkeySessions_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/dataupcloudmanageddatabasevalkeysessions"

dataupcloudmanageddatabasevalkeysessions.DataUpcloudManagedDatabaseValkeySessions_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/dataupcloudmanageddatabasevalkeysessions"

dataupcloudmanageddatabasevalkeysessions.DataUpcloudManagedDatabaseValkeySessions_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataUpcloudManagedDatabaseValkeySessions resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataUpcloudManagedDatabaseValkeySessions to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataUpcloudManagedDatabaseValkeySessions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.18.0/docs/data-sources/managed_database_valkey_sessions#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataUpcloudManagedDatabaseValkeySessions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.property.sessions">Sessions</a></code> | <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsList">DataUpcloudManagedDatabaseValkeySessionsSessionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.property.limitInput">LimitInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.property.offsetInput">OffsetInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.property.orderInput">OrderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.property.serviceInput">ServiceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.property.sessionsInput">SessionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.property.limit">Limit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.property.offset">Offset</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.property.order">Order</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.property.service">Service</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Sessions`<sup>Required</sup> <a name="Sessions" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.property.sessions"></a>

```go
func Sessions() DataUpcloudManagedDatabaseValkeySessionsSessionsList
```

- *Type:* <a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsList">DataUpcloudManagedDatabaseValkeySessionsSessionsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LimitInput`<sup>Optional</sup> <a name="LimitInput" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.property.limitInput"></a>

```go
func LimitInput() *f64
```

- *Type:* *f64

---

##### `OffsetInput`<sup>Optional</sup> <a name="OffsetInput" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.property.offsetInput"></a>

```go
func OffsetInput() *f64
```

- *Type:* *f64

---

##### `OrderInput`<sup>Optional</sup> <a name="OrderInput" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.property.orderInput"></a>

```go
func OrderInput() *string
```

- *Type:* *string

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.property.serviceInput"></a>

```go
func ServiceInput() *string
```

- *Type:* *string

---

##### `SessionsInput`<sup>Optional</sup> <a name="SessionsInput" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.property.sessionsInput"></a>

```go
func SessionsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Limit`<sup>Required</sup> <a name="Limit" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.property.limit"></a>

```go
func Limit() *f64
```

- *Type:* *f64

---

##### `Offset`<sup>Required</sup> <a name="Offset" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.property.offset"></a>

```go
func Offset() *f64
```

- *Type:* *f64

---

##### `Order`<sup>Required</sup> <a name="Order" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.property.order"></a>

```go
func Order() *string
```

- *Type:* *string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.property.service"></a>

```go
func Service() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataUpcloudManagedDatabaseValkeySessionsConfig <a name="DataUpcloudManagedDatabaseValkeySessionsConfig" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/dataupcloudmanageddatabasevalkeysessions"

&dataupcloudmanageddatabasevalkeysessions.DataUpcloudManagedDatabaseValkeySessionsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Service: *string,
	Id: *string,
	Limit: *f64,
	Offset: *f64,
	Order: *string,
	Sessions: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsConfig.property.service">Service</a></code> | <code>*string</code> | Service's UUID for which these sessions belongs to. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.18.0/docs/data-sources/managed_database_valkey_sessions#id DataUpcloudManagedDatabaseValkeySessions#id}. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsConfig.property.limit">Limit</a></code> | <code>*f64</code> | Number of entries to receive at most. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsConfig.property.offset">Offset</a></code> | <code>*f64</code> | Offset for retrieved results based on sort order. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsConfig.property.order">Order</a></code> | <code>*string</code> | Order by session field and sort retrieved results. Limited variables can be used for ordering. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsConfig.property.sessions">Sessions</a></code> | <code>interface{}</code> | sessions block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsConfig.property.service"></a>

```go
Service *string
```

- *Type:* *string

Service's UUID for which these sessions belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.18.0/docs/data-sources/managed_database_valkey_sessions#service DataUpcloudManagedDatabaseValkeySessions#service}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.18.0/docs/data-sources/managed_database_valkey_sessions#id DataUpcloudManagedDatabaseValkeySessions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Limit`<sup>Optional</sup> <a name="Limit" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsConfig.property.limit"></a>

```go
Limit *f64
```

- *Type:* *f64

Number of entries to receive at most.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.18.0/docs/data-sources/managed_database_valkey_sessions#limit DataUpcloudManagedDatabaseValkeySessions#limit}

---

##### `Offset`<sup>Optional</sup> <a name="Offset" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsConfig.property.offset"></a>

```go
Offset *f64
```

- *Type:* *f64

Offset for retrieved results based on sort order.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.18.0/docs/data-sources/managed_database_valkey_sessions#offset DataUpcloudManagedDatabaseValkeySessions#offset}

---

##### `Order`<sup>Optional</sup> <a name="Order" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsConfig.property.order"></a>

```go
Order *string
```

- *Type:* *string

Order by session field and sort retrieved results. Limited variables can be used for ordering.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.18.0/docs/data-sources/managed_database_valkey_sessions#order DataUpcloudManagedDatabaseValkeySessions#order}

---

##### `Sessions`<sup>Optional</sup> <a name="Sessions" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsConfig.property.sessions"></a>

```go
Sessions interface{}
```

- *Type:* interface{}

sessions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.18.0/docs/data-sources/managed_database_valkey_sessions#sessions DataUpcloudManagedDatabaseValkeySessions#sessions}

---

### DataUpcloudManagedDatabaseValkeySessionsSessions <a name="DataUpcloudManagedDatabaseValkeySessionsSessions" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/dataupcloudmanageddatabasevalkeysessions"

&dataupcloudmanageddatabasevalkeysessions.DataUpcloudManagedDatabaseValkeySessionsSessions {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataUpcloudManagedDatabaseValkeySessionsSessionsList <a name="DataUpcloudManagedDatabaseValkeySessionsSessionsList" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/dataupcloudmanageddatabasevalkeysessions"

dataupcloudmanageddatabasevalkeysessions.NewDataUpcloudManagedDatabaseValkeySessionsSessionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataUpcloudManagedDatabaseValkeySessionsSessionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsList.get"></a>

```go
func Get(index *f64) DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference <a name="DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/dataupcloudmanageddatabasevalkeysessions"

dataupcloudmanageddatabasevalkeysessions.NewDataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.property.activeChannelSubscriptions">ActiveChannelSubscriptions</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.property.activeDatabase">ActiveDatabase</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.property.activePatternMatchingChannelSubscriptions">ActivePatternMatchingChannelSubscriptions</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.property.applicationName">ApplicationName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.property.clientAddr">ClientAddr</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.property.connectionAge">ConnectionAge</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.property.connectionIdle">ConnectionIdle</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.property.flags">Flags</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.property.flagsRaw">FlagsRaw</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.property.multiExecCommands">MultiExecCommands</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.property.outputBuffer">OutputBuffer</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.property.outputBufferMemory">OutputBufferMemory</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.property.outputListLength">OutputListLength</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.property.query">Query</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.property.queryBuffer">QueryBuffer</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.property.queryBufferFree">QueryBufferFree</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ActiveChannelSubscriptions`<sup>Required</sup> <a name="ActiveChannelSubscriptions" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.property.activeChannelSubscriptions"></a>

```go
func ActiveChannelSubscriptions() *f64
```

- *Type:* *f64

---

##### `ActiveDatabase`<sup>Required</sup> <a name="ActiveDatabase" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.property.activeDatabase"></a>

```go
func ActiveDatabase() *string
```

- *Type:* *string

---

##### `ActivePatternMatchingChannelSubscriptions`<sup>Required</sup> <a name="ActivePatternMatchingChannelSubscriptions" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.property.activePatternMatchingChannelSubscriptions"></a>

```go
func ActivePatternMatchingChannelSubscriptions() *f64
```

- *Type:* *f64

---

##### `ApplicationName`<sup>Required</sup> <a name="ApplicationName" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.property.applicationName"></a>

```go
func ApplicationName() *string
```

- *Type:* *string

---

##### `ClientAddr`<sup>Required</sup> <a name="ClientAddr" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.property.clientAddr"></a>

```go
func ClientAddr() *string
```

- *Type:* *string

---

##### `ConnectionAge`<sup>Required</sup> <a name="ConnectionAge" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.property.connectionAge"></a>

```go
func ConnectionAge() *f64
```

- *Type:* *f64

---

##### `ConnectionIdle`<sup>Required</sup> <a name="ConnectionIdle" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.property.connectionIdle"></a>

```go
func ConnectionIdle() *f64
```

- *Type:* *f64

---

##### `Flags`<sup>Required</sup> <a name="Flags" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.property.flags"></a>

```go
func Flags() *[]*string
```

- *Type:* *[]*string

---

##### `FlagsRaw`<sup>Required</sup> <a name="FlagsRaw" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.property.flagsRaw"></a>

```go
func FlagsRaw() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MultiExecCommands`<sup>Required</sup> <a name="MultiExecCommands" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.property.multiExecCommands"></a>

```go
func MultiExecCommands() *f64
```

- *Type:* *f64

---

##### `OutputBuffer`<sup>Required</sup> <a name="OutputBuffer" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.property.outputBuffer"></a>

```go
func OutputBuffer() *f64
```

- *Type:* *f64

---

##### `OutputBufferMemory`<sup>Required</sup> <a name="OutputBufferMemory" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.property.outputBufferMemory"></a>

```go
func OutputBufferMemory() *f64
```

- *Type:* *f64

---

##### `OutputListLength`<sup>Required</sup> <a name="OutputListLength" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.property.outputListLength"></a>

```go
func OutputListLength() *f64
```

- *Type:* *f64

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.property.query"></a>

```go
func Query() *string
```

- *Type:* *string

---

##### `QueryBuffer`<sup>Required</sup> <a name="QueryBuffer" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.property.queryBuffer"></a>

```go
func QueryBuffer() *f64
```

- *Type:* *f64

---

##### `QueryBufferFree`<sup>Required</sup> <a name="QueryBufferFree" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.property.queryBufferFree"></a>

```go
func QueryBufferFree() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



